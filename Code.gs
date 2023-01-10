function convertTextToNumeric(e="$110.43") {
   
    /* regex that will extract the number from any given string */
    const someNumber = Number(e.replace(/[^0-9.-]+/g,""))
    console.log(someNumber)
}

convertTextToNumeric()
