import { FastifyRequest, FastifyReply } from 'fastify';

import { HealthCheckController } from '../health-controller';
import { HealthCheckRouter } from '../health-route';

// Criação de um controlador mockado para substituir o real em testes
const mockedHealthCheckController = {
    handler: jest.fn().mockReturnValue({ status: 'OK' }),
} as HealthCheckController;

describe('HealthCheckRouter', () => {
    let router: HealthCheckRouter;
    let server: any;

    beforeEach(() => {
        // Antes de cada teste, limpa a simulação do manipulador
        // e cria uma nova instância do roteador com o controlador simulado
        (mockedHealthCheckController.handler as jest.Mock).mockClear();
        router = new HealthCheckRouter(mockedHealthCheckController);
        server = { get: jest.fn() };
    });

    // Verifica se o roteador está registrando a rota /health corretamente
    it('should register the /health route', () => {
        router.registerRoutes(server);
        expect(server.get).toHaveBeenCalled();
    });

    // Verifica se a função manipuladora do controlador é chamada quando a rota é acessada
    it('should call handler function when route is accessed', async () => {
        router.registerRoutes(server);
        const routeHandler = server.get.mock.calls[0][1];

        const mockRequest = {} as FastifyRequest;
        const mockReply = {} as FastifyReply;
        await routeHandler(mockRequest, mockReply);

        expect(mockedHealthCheckController.handler).toHaveBeenCalledWith(
            mockRequest,
            mockReply
        );
    });

    // Verifica se o resultado retornado pela função manipuladora do controlador é o correto
    it('should return the result from the controller', async () => {
        router.registerRoutes(server);
        const routeHandler = server.get.mock.calls[0][1];

        const mockRequest = {} as FastifyRequest;
        const mockReply = {} as FastifyReply;
        const result = await routeHandler(mockRequest, mockReply);

        expect(result).toEqual({ status: 'OK' });
    });
});
