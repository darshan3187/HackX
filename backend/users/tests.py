from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth import get_user_model

User = get_user_model()


class UserAPITest(APITestCase):

    def setUp(self):
        self.register_url = reverse("register")
        self.login_url = reverse("token_obtain_pair")
        self.profile_url = reverse("profile")
        self.user_list_url = reverse("user-list")

        # Create normal user
        self.user = User.objects.create_user(
            username="testuser",
            password="testpass123"
        )

        # Create admin user
        self.admin = User.objects.create_superuser(
            username="adminuser",
            password="adminpass123",
            email="admin@test.com"
        )

    # 🔹 Helper method to login
    def authenticate(self, username, password):
        response = self.client.post(self.login_url, {
            "username": username,
            "password": password
        }, format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("access", response.data)

        token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + token)

    # 1️⃣ Test Successful Registration
    def test_user_registration(self):
        data = {
            "username": "newuser",
            "email": "new@test.com",
            "password": "newpass123"
        }

        response = self.client.post(self.register_url, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(User.objects.filter(username="newuser").exists())

        # Ensure default role is CITIZEN
        user = User.objects.get(username="newuser")
        self.assertEqual(user.role, "CITIZEN")

    # 2️⃣ Test Duplicate Username Fails
    def test_duplicate_registration_fails(self):
        data = {
            "username": "testuser",
            "password": "something123"
        }

        response = self.client.post(self.register_url, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    # 3️⃣ Test Valid Login
    def test_user_login(self):
        response = self.client.post(self.login_url, {
            "username": "testuser",
            "password": "testpass123"
        }, format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("access", response.data)
        self.assertIn("refresh", response.data)

    # 4️⃣ Test Invalid Login
    def test_invalid_login(self):
        response = self.client.post(self.login_url, {
            "username": "testuser",
            "password": "wrongpassword"
        }, format="json")

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    # 5️⃣ Profile Requires Authentication
    def test_profile_requires_authentication(self):
        response = self.client.get(self.profile_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    # 6️⃣ Authenticated User Can View Profile
    def test_authenticated_user_can_view_profile(self):
        self.authenticate("testuser", "testpass123")

        response = self.client.get(self.profile_url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["username"], "testuser")
        self.assertEqual(response.data["role"], "CITIZEN")

    # 7️⃣ Normal User Cannot Access User List
    def test_normal_user_cannot_view_user_list(self):
        self.authenticate("testuser", "testpass123")

        response = self.client.get(self.user_list_url)

        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # 8️⃣ Admin Can Access User List
    def test_admin_can_view_user_list(self):
        self.authenticate("adminuser", "adminpass123")

        response = self.client.get(self.user_list_url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)
