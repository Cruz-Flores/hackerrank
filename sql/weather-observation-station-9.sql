select
  distinct city
from
  station
where
  city ~ '^[^AEIOU]'
order by
  city