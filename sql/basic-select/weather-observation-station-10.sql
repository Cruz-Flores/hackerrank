SELECT
  DISTINCT city
FROM
  station
WHERE
  city ~ '[^aeiou]$'
ORDER BY
  city