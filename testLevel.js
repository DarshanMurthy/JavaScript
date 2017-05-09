var nameTest = () =>{
    return "value"
}

fetchVaultsWithIds( ids ){
    sails.log.debug(`StoService invoked: ${JSON.stringify(ids, null, '  ')}`);
    
    return new Promise((resolve, reject) => {
      stoRequest(Object.assign({}, RequestHelper.addAgentOptions(), {
        url: `${sails.config.stoApiEndpoint}/vault/search`,
        method: 'POST',
        json: true,
        body: {
          ids
        }
      }), ( err, response ) => {
        if ( err ){
          reject(err);
        } else {
          resolve( response.toJSON() );
        }
      });
    });
  }

