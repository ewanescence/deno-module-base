// Copyright 2025 Ewanescence. All rights reserved. MIT license.
// Dependencies
import { assertEquals } from "@std/assert";

// Functions
import { greet } from "./greet.ts";

Deno.test(`greet() returns a message with the input name given`, () => {
  assertEquals(greet("Deno"), `Hello, Deno! 🦕`);
});
