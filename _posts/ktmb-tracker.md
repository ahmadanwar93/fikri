---
title: "KTMB Tracker"
excerpt: "A real-time train tracking system using GTFS Realtime and Protocol Buffers"
coverImage: "/assets/blog/ktmb-tracker/tracker-frame-2.jpeg"
alternativeCoverImage: "/assets/blog/ktmb-tracker/tracker-frame-2.jpeg"
date: "2025-11-26T00:00:00.000Z"
author:
  name: Fikri
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/ktmb-tracker/tracker-frame-2.jpeg"
---

## Introduction

For this <u>[project](https://ktmb-tracker.vercel.app/)</u>, I have built a real-time train tracking application for KTMB (Keretapi Tanah Melayu Berhad) to visualize live train positions on an interactive map. The application leverages GTFS (General Transit Feed Specification) Realtime data and Protocol Buffers.

## What I have done & learnt

The application fetches vehicle position data from API, which is encoded as Protocol Buffers.A protobuf decoder then loads the GTFS Realtime schema and decodes binary data. Static data also been used to enrich the data point before plotted on an interactive map.

## Project stack/ packages

- React with TypeScript
- Vite
- Tailwind
- Leaflet
- protobufjs
- PapaParse

## Improvements

1. Add train status indicators (on-time, delayed, cancelled) based on schedule adherence.
2. Github actions to rebuild the app automatically when the static data is fetched daily.

## Resources

1. <u>[GTFS Realtime API Documentation](https://developer.data.gov.my/realtime-api/gtfs-realtime)</u>
2. <u>[GTFS Static API Documentation](https://developer.data.gov.my/realtime-api/gtfs-static)</u>
3. <u>[Frontend repo](https://github.com/ahmadanwar93/ktmb-tracker)</u>
