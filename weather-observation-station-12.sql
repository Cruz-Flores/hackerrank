select
  distinct city
from
  station
where
  city ~ '^[^AEIOU].*[^aeiou]$'
order by
  city