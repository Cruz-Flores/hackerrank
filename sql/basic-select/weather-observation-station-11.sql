select
  distinct city
from
  station
where
  city !~ '^[AEIOU].*[aeiou]$'
order by
  city
  /* este codigo consulta una lista de ciudades que o bien no empiezan por 
   vocales o bien no termina con vocales. Hay que analizar la primera consulta 
   de donde se puede sacar esta, la primera consulta es 
   
   select
   distinct city
   from
   station
   where
   city ~ '^[AEIOU].*[aeiou]$'
   order by
   city
   
   esto es empiezan YYYY terminan con vocales, negando la expresion regular se 
   incluyen que pueden empezar con vocal pero no terminar con una o que puden 
   terminar con vocal pero no empezar con una o que no empiecen y terminen con 
   vocal */