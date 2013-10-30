#!/bin/bash

set -x

export cible=$1
export directory=$2

echo "create web app for: WEB, firefoxos, android" 

function help_display {
	echo "USAGE create_appli [android|web|firefoxos] new_path"
}


if [ "$cible" == "" ] 
then
	help_display
	exit -1;
fi

if [ "$directory" == "" ] 
then
	help_display
	exit -1;
fi


function android_export {
	mkdir -p $directory
	cp -f *.html $directory
	cp -fr css $directory/css
	cp -fr db $directory/db
	cp -fr ext $directory/ext
	cp -fr img $directory/img
	cp -fr js $directory/js 
	cp -fr lang $directory/lang 
	cp -fr themes $directory/themes 
	cp -fr video $directory/video
	
	find  $directory/img -iname '*svg' -exec rm -fr {} \; 
	find  $directory/lang -iname '*xls' -exec rm -fr {} \; 
	find  $directory/ -name '*~' -exec rm -f {} \; 
	rm -f $directory/img/icone.png
	
	//Set parameter
	sed -i -e "s/^platform=.*/platform=\"android\"/g" $directory/js/sc.js 
        sed -i -e "s/^top_source=.*/top_source=\"file:\/\/\/android_asset\/www\/\"/g" $directory/js/sc.js 
}
	   
function web_export {
	mkdir -p $directory
	cp -f *.html $directory
	cp -fr css $directory/css
	cp -fr db $directory/db
	cp -fr ext $directory/ext
	cp -fr img $directory/img
	cp -fr js $directory/js 
	cp -fr lang $directory/lang 
	cp -fr themes $directory/themes 
	cp -fr video $directory/video
	
	find  $directory/img -iname '*svg' -exec rm -fr {} \; 
	find  $directory/lang -iname '*xls' -exec rm -fr {} \; 
	find  $directory/ -name '*~' -exec rm -f {} \; 
	rm -f $directory/img/icone.png
	
	//Set parameter
	sed -i -e "s/^platform=.*/platform=\"web\"/g" $directory/js/sc.js 
        sed -i -e "s/^top_source=.*/top_source=\"\/golf\/\"/g" $directory/js/sc.js 
}

function firefoxos_export  {
	echo TBD
}


case "$cible" in
	"android")
		android_export
		echo "Android" ;;
	"web")
		web_export
		echo "WEB" ;;
	"firefoxos")
		echo "firefoxos" ;;
	*)
		help_display
	;;
esac
