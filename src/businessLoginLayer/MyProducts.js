import MySize from './MySize';
import MyUom from './MyUom';
import MyCatagory from './MyCatagory';
import MyCompany from './MyCompany';
import MyAisle from './MyAisle';

class MyProducts {
	// constructor(_id, name, price, size, uom, availableQuantity, status, aisle, catagory, company, productImg) {
	// 	this._id = _id;
	// 	this.name = name;
	// 	this.price = price;
	// 	this.size = size;
	// 	this.uom = uom;
	// 	this.availableQuantity = availableQuantity;
	// 	this.status = status;
	// 	this.aisle = aisle;
	// 	this.catagory = catagory;
	// 	this.company = company;
	// 	this.productImg = productImg;
	// }
	constructor() {
		this._id = '';
		this.name = '';
		this.price = '';
		this.size = {};
		(this.sizeId = ''), (this.uomId = ''), (this.uom = {});
		this.availableQuantity = 0;
		this.unitQuantity = 0;
		this.status = '';
		this.aisle = {};
		this.aisleId = '';
		this.catagory = {};
		(this.catagoryId = ''), (this.company = {});
		this.companyId = '';
		(this.description = ''), (this.productImage = '');
	}
	setValue(p) {
		this._id = p._id;
		this.name = p.name;
		this.price = p.price;
		this.size = new MySize(p.size);
		this.uom = new MyUom(p.uom);
		this.availableQuantity = p.availableQuantity;
		this.status = p.status;
		this.aisle = new MyAisle(p.aisle);
		this.catagory = new MyCatagory(p.catagory);
		this.company = new MyCompany(p.company);
		this.productImage = p.productImage;
		return this;
	}
	setParams(
		name,
		price,
		sizeId,
		uomId,
		availableQuantiy,
		unitQuantity,
		status,
		aisleId,
		catagoryId,
		companyId,
		description
	) {
		this.name = name;
		this.price = price;

		this.sizeId = sizeId;
		this.uomId = uomId;

		this.availableQuantity = availableQuantiy;
		this.unitQuantity = unitQuantity;
		this.status = status;

		this.aisleId = aisleId;
		(this.catagoryId = catagoryId), (this.companyId = companyId);
		this.description = description;
		return this;
	}
}
export default MyProducts;
