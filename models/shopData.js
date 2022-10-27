async function shopData(shopId){
    // var authenticated = false;
    const shop_query=
    {
        text: 'SELECT * FROM shops WHERE id= $1',
        values: [shopId]
    };
    var query_data = await pg_conn.query(shop_query);
    console.log(query_data.row[0]);
    return query_data.rows[0];
    // if (query_data.rowCount == 1){
    //     authenticated = true;
    // }
    // console.log(authenticated);
    // return authenticated;
}

module.exports = shopData;