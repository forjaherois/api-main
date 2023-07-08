import { FastifyReply, FastifyRequest } from "fastify";

import { HealthCheckController } from "../health-controller";

// Criação de objetos request e reply simulados
const mockRequest = {} as FastifyRequest;
const mockReply = {
    send: jest.fn(),
} as unknown as FastifyReply;

describe("HealthCheckController", () => {
    // Limpa a simulação de resposta antes de cada teste
    beforeEach(() => {
        (mockReply.send as jest.Mock).mockClear();
    });

    // Testa se o método 'handler' do controlador envia a resposta correta
    it("should send the correct response", async () => {
        const controller = new HealthCheckController();

        await controller.handler(mockRequest, mockReply);

        expect(mockReply.send).toHaveBeenCalledWith({ status: "ok" });
    });

    // Testa se o método 'handler' do controlador é chamado uma vez
    it("should call reply.send once", async () => {
        const controller = new HealthCheckController();

        await controller.handler(mockRequest, mockReply);

        expect(mockReply.send).toHaveBeenCalledTimes(1);
    });
});
