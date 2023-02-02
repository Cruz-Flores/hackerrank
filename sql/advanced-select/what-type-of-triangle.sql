SELECT
  CASE
    WHEN a = b
    or b = c THEN 'Isosceles'
    when a = b
    and b = c then 'Equilateral'
    when a != b
    and b != c
    and a != c
    and a + b > c then 'Scalene'
    ELSE 'Not A Triangle'
  END
FROM
  triangles
  /* hay que prestar atencion a las condiciones engañosas de los retos*/
select
  CASE
    when A + B <= C
    OR A + C <= B
    OR B + C <= A THEN 'Not A Triangle'
    when A = B
    AND B = C THEN 'Equilateral'
    when A = B
    OR B = C
    or A = C then 'Isosceles'
    else 'Scalene'
  end
from
  Triangles;