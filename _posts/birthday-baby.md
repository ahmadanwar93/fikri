---
title: "Birthday visualisation"
excerpt: "Some exploration on birthday dates in Malaysia"
coverImage: "/assets/blog/birthday-baby/birthday-baby.jpg"
date: "2024-08-31T00:00:00.000Z"
author:
  name: Fikri
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/birthday-baby/birthday-baby.jpg"
---

## Introduction

The inspiration for this visualisation came from looking at the birthday explorer <u>[here](https://data.gov.my/dashboard/birthday-explorer)</u>. In particular I am just interested in looking at the pattern in the month of January. I still do not know the reason why there are peaks at the start of January, and the end of December.

## Inspiration

My goal for the data visualization is to blend data visualisation and graphic design, hence why the wacky design was chosen. I researched a lot on what graphics to use to represent birthdays, but I settled on tree rings. Tree rings can be used to determine the age of a tree, which is related to birthdays.

## More exploration

I do wonder if using both total and average births per day across all the years would show if a similar pattern persists. But I do not have the luxury of time to properly visualise it. However, the code is here. Download the CSV file from the data catalogue <u>[here](https://data.gov.my/data-catalogue/births)</u>. This is the code I used to generate both the sum and average of daily births.

```python
import pandas as pd

df = pd.read_csv('births.csv')
df['date'] = pd.to_datetime(df['date'], errors='coerce')

grouped = df.groupby(df['date'].dt.day)['births']

avg_births = grouped.mean().reset_index()
avg_births.columns = ['day', 'avg_births']
avg_births.to_csv('daily_births_average.csv', index=False)

sum_births = grouped.sum().reset_index()
sum_births.columns = ['day', 'total_births']
sum_births.to_csv('daily_births_sum.csv', index=False)

print("Files created:")
print("- daily_births_average.csv (average births per occurrence of each day)")
print("- daily_births_sum.csv (total births summed across all years)")
```
