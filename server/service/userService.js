/**
 * Created by supun on 11/04/17.
 */

var connection = require('../mysqlConnectionPool');

class UserService{

    signupUser(user){
        "use strict";
        /*connection.getConnection(function (err, connection) {
            let sql = "insert into user ('name','email') values ("+user.name+","+user.email+")";
            connection.query(sql, function (err, results) {
                if (err) {
                    reject(err);
                }
                fulfill();
            });

        });*/

    }


}

module.exports = new UserService();