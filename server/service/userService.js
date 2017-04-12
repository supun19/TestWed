/**
 * Created by supun on 11/04/17.
 */

var connection = require('../mysqlConnectionPool');
var Promise = require('promise');

// Constructor
function UserService() {

}
// class methods

UserService.prototype.signupUser = function(user) {

    return new Promise(function (fullfill,reject) {
        connection.getConnection(function(err, connection) {
            // Use the connection
            "use strict"
            let sql = "insert into user (name,email) values ("+connection.escape(user.name)+","+connection.escape(user.email)+")";

            connection.query(sql, function (error, results) {
                // And done with the connection.
                connection.release();

                // Handle error after the release.
                if (error) {

                    reject(error);

                }
                else{

                    const response = {

                        signup: true

                    };

                    fullfill(response);
                }



                // Don't use the connection here, it has been returned to the pool.
            });
        });
    });


        /*connection.getConnection(function (err, connection) {
            "use strict"
            let sql = "insert into user ('name','email') values (supun,supun@gmail)";
            connection.query(sql, function (err, results) {
                if (err) {
                    reject(err);
                }
                fulfill();
            });

        });*/


};

module.exports = new UserService();