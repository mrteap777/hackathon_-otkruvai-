"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const start = async () => {
    try {
        const PORT = process.env.PORT || 5000;
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        if (process.env.NODE_ENV !== 'production') {
            const allowedOrigins = ['http://localhost:3000'];
            app.enableCors({
                origin: (origin, callback) => {
                    if (!origin || allowedOrigins.includes(origin)) {
                        callback(null, true);
                    }
                    else {
                        callback(new Error('Not allowed by CORS'));
                    }
                },
            });
        }
        await app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
    }
    catch (e) {
        console.log(e);
    }
};
start();
//# sourceMappingURL=main.js.map