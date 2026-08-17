import React from 'react';
import { Inbox } from 'lucide-react';
import Button from './Button';

const EmptyState = ({
  icon: Icon = Inbox,
  title = "No issues found",
  description = "Report a new civic issue to start tracking its resolution status.",
  actionText = "Report an Issue",
  onAction,
  actionHref,
}) => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-10 text-center flex flex-col items-center justify-center space-y-4 max-w-md mx-auto my-8 font-sans shadow-2xs">
      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
        <Icon className="w-7 h-7" />
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-extrabold text-gray-900">{title}</h3>
        <p className="text-xs text-gray-500 font-medium max-w-xs">{description}</p>
      </div>

      {(onAction || actionHref) && (
        <div className="pt-2">
          {actionHref ? (
            <Button onClick={() => window.location.href = actionHref}>
              {actionText}
            </Button>
          ) : (
            <Button onClick={onAction}>
              {actionText}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default EmptyState;
