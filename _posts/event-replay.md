---
title: "Event replay"
excerpt: "A simple project using event driven and event replay"
coverImage: "/assets/blog/event-replay/mermaid-diagram.png"
alternativeCoverImage: "/assets/blog/event-replay/mermaid-framed.jpg"
date: "2025-11-24T00:00:00.000Z"
author:
  name: Fikri
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/event-replay/mermaid-diagram.png"
---

## Introduction

For this project, I have built a simple order management system to learn about event replay and event driven architecture.

## What I have done & learnt

From the diagram shown above, when an order comes in through API, an `OrderPlaced` event has been triggered, and 4 listeners subsequently execute the logic. In each of the `handle` method in the listener, there is idempotency check to prevent duplicate operations on replay. In the case of failed listener, the event replay can be used to trigger all the listener again. All the logics have been tested with pest in the `OrderTest` file.

## Current project architecture

Source of Truth:

- `orders` table for Current order state
- `inventory` table for Current stock levels
- `email_logs` table for What emails were sent
- `notifications` table for What notifications exist

Currently `domain_events` table is being used for audit trail and replay purposes only.

## Improvements

1. Create more event types instead of just one `OrderPlaced` event (e.g., `OrderShipped`, `OrderCancelled`)
2. Implement a proper event sourcing architecture where the event store is the single source of truth, rather than the current approach where application state can be obtained by replaying events from the event store

## Resources

1. <u>[Backend repo](https://github.com/ahmadanwar93/event-replay-simple)</u>
