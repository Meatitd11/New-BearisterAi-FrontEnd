import React from "react";

function Card({ className = "", ...props }) {
  return (
    <div
      data-slot="card"
      className={`bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-sm ${className}`}
      {...props}
    />
  );
}

function CardHeader({ className = "", ...props }) {
  return (
    <div
      data-slot="card-header"
      className={`grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-4 border-b ${className}`}
      {...props}
    />
  );
}

function CardTitle({ className = "", ...props }) {
  return (
    <h3
      data-slot="card-title"
      className={`text-lg font-semibold leading-none ${className}`}
      {...props}
    />
  );
}

function CardDescription({ className = "", ...props }) {
  return (
    <p
      data-slot="card-description"
      className={`text-sm text-gray-500 ${className}`}
      {...props}
    />
  );
}

function CardAction({ className = "", ...props }) {
  return (
    <div
      data-slot="card-action"
      className={`self-start justify-self-end ${className}`}
      {...props}
    />
  );
}

function CardContent({ className = "", ...props }) {
  return (
    <div
      data-slot="card-content"
      className={`px-6 ${className}`}
      {...props}
    />
  );
}

function CardFooter({ className = "", ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={`flex items-center px-6 pt-4 border-t ${className}`}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
