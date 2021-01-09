class MyCompany {
	constructor(c) {
		this._id = c._id;
		this.name = c.name;
	}
	setValues(_id, name) {
		this._id = _id;
		this.name = name;
	}
}
export default MyCompany;
