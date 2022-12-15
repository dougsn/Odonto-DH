import axios from "axios";
import { getDentistas } from "./AuthContext";
import { BASE_URL, fetchDentistas } from "./dentistas";

jest.mock("axios");

describe('Testar um dentista', () => {
    describe("Quando a API é chamada com sucesso", () => {
        it("retornar a lista de dentistas e consultar se existe um especifico", async () => {
          const dentista = [
            { nome: "Admin", sobrenome: "Admin" },
          ];
          axios.get.mockResolvedValueOnce(dentista);
    
          const result = await fetchDentistas();
    
          expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/dentista`);
          expect(result).toEqual(dentista);
        });
    
    });

    describe("Quando a API é chamada com falha", () => {
        it("retornar a lista de dentistas vazia", async () => {
          const message = "Erro ao retornar";
          axios.get.mockRejectedValueOnce(new Error(message));
    
          const result = await fetchDentistas();

          expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/dentista`);
          expect(result).toEqual([]);
        });
      });
});