SET
  @d = 0,
  @p = 0,
  @s = 0,
  @a = 0;

SELECT
  MIN (DOCTOR_NAMES),
  MIN (PROFESSOR_NAMES),
  MIN (SINGER_NAMES),
  MIN (ACTOR_NAMES)
FROM
  (
    SELECT
      CASE
        WHEN OCCUPATION = 'Doctor' THEN NAME
      END AS DOCTOR_NAMES,
      CASE
        WHEN OCCUPATION = 'Professor' THEN NAME
      END AS PROFESSOR_NAMES,
      CASE
        WHEN OCCUPATION = 'Singer' THEN NAME
      END AS SINGER_NAMES,
      CASE
        WHEN OCCUPATION = 'Actor' THEN NAME
      END AS ACTOR_NAMES,
      CASE
        WHEN OCCUPATION = 'Doctor' THEN (@d := @d + 1)
        WHEN OCCUPATION = 'Professor' THEN (@p := @p + 1)
        WHEN OCCUPATION = 'Singer' THEN (@s := @s + 1)
        WHEN OCCUPATION = 'Actor' THEN (@a := @a + 1)
      END AS ROW_NUM
    FROM
      OCCUPATIONS
    ORDER BY
      NAME
  ) AS TEMP
GROUP BY
  ROW_NUM;