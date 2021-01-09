class MySize {
	constructor() {
		this._id = '';
		this.name = '';
		this.pOrder = '';
	}
	setValues(v) {
		this._id = v._id;
		this.name = v.name;
		this.pOrder = v.pOrder;
		return this;
	}
	setParams(_id, name) {
		this._id = _id;
		this.name = name;
		return this;
	}
}
export default MySize;
