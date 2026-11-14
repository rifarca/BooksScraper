"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookDto = void 0;
const openapi = require("@nestjs/swagger");
class BookDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, desc: { required: true, type: () => String }, upc: { required: true, type: () => String }, price: { required: true, type: () => String }, availability: { required: true, type: () => String }, rating: { required: true, type: () => String }, detailUrl: { required: true, type: () => String } };
    }
}
exports.BookDto = BookDto;
//# sourceMappingURL=book.dto.js.map