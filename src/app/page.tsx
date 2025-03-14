"use client";

import React from "react";
import InfiniteScrollList from "../components/InfiniteScrollList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <InfiniteScrollList />
    </main>
  );
}
