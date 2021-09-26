const db = require('../../plugins/mysql');
const sqlHelper = require('../../../util/sqlHelper');
const TABLE = require('../../../util/TABLE');

const memberModel = {
	async duplicateCheck({field, value}) {
		const sql = sqlHelper.SelectSimple(
			TABLE.MEMBER, 
			{[field]: value}, 
			['COUNT(*) AS cnt']
		);
		const [[row]] = await db.execute(sql.query, sql.values);
    console.log(row);
		return row;
	}
}

module.exports = memberModel;