#!/bin/bash

echo "Ingrese el nombre de la db que quiere crear!"
read nombre_db

archivo_temporal=".env.tmp"
encontrado=false

while read linea
do
  if [[ $linea =~ "PG_DB=" ]]; then
	linea+="$nombre_db"
	encontrado=true
  fi
  echo "$linea" >> "$archivo_temporal"
  echo "$nameVar" >> "$archivo_temporal"
done < .env

if [ "$encontrado" = false ]; then
  echo "PG_DB=$nombre_db" >> "$archivo_temporal"
fi

#sudo su - postgres
#psql -U usuario -c "CREATE DATABASE $nombre_db;"

mv "$archivo_temporal" .env


