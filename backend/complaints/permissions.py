from rest_framework import permissions

class IsOwnerOrAdmin(permissions.BasePermission):
    """
    Object-level permission to only allow owners of an object to edit it.
    Assumes the model instance has an `owner` attribute.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        # But wait, the spec says "Users cannot access others' complaints"
        # So we should block read if not owner or admin.

        if request.user.is_staff:
            return True

        # Instance must have an attribute named `user`.
        return obj.user == request.user
