select
  concat(name, '(', substr(occupation, 1, 1), ')') as initial
from
  occupations
order by
  name;

select
  concat(
    'There are a total of ',
    count(*),
    ' ',
    lower(occupation),
    's.'
  )
from
  occupations
group by
  occupation
order by
  count(*),
  occupation asc;

/* hay que tener cuidado con las reglas que pone hackerrank*/