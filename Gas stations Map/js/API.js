class API {
    async getData() {
        
        const total = 500;
         //Get data from API
         const data = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

         //Return data as JSOM
         const resJSON = await data.json();

         // Retornar the object
         return {
              resJSON
         }
    }
}