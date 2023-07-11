import { FastifyReply, FastifyRequest } from "fastify";

import { HealthCheckController } from "../health-controller";

// Criação de objetos request e reply simulados
const mockRequest = {} as FastifyRequest;
const mockReply = {
    send: jest.fn(),
} as unknown as FastifyReply;

describe("HealthCheckController", () => {
    beforeEach(() => {
        (mockReply.send as jest.Mock).mockClear();
    });

    it("should send the correct response", async () => {
        const controller = new HealthCheckController();

        await controller.handler(mockRequest, mockReply);

        expect(mockReply.send).toHaveBeenCalledWith({ status: "ok" });
    });

    it("should call reply.send once", async () => {
        const controller = new HealthCheckController();

        await controller.handler(mockRequest, mockReply);

        expect(mockReply.send).toHaveBeenCalledTimes(1);
    });
});
