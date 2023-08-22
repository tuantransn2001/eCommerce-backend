"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const common_2 = require("../common");
const model_enums_1 = require("../ts/enums/model_enums");
const serverErrorHandler_1 = require("../utils/serverErrorHandler");
let AddressService = exports.AddressService = class AddressService {
    constructor(addressModel) {
        this.addressModel = addressModel;
    }
    async getUserAddress({ id, page_number, page_size }) {
        try {
            return (0, common_2.getAllRecordHandler)(this.addressModel, { page_number, page_size }, ['id', 'city', 'country', 'postalCode', 'address'], { user_id: id });
        }
        catch (err) {
            return (0, serverErrorHandler_1.handleServerError)(err);
        }
    }
};
exports.AddressService = AddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(model_enums_1.MODEL_NAME.ADDRESS)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AddressService);
//# sourceMappingURL=address.service.js.map