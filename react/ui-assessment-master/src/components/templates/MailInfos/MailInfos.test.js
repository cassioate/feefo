import React from "react";
import { render } from "@testing-library/react";
import MailInfos from "./MailInfos.jsx";

describe("MailInfos", () => {
  it("renders support contact information correctly", () => {
    // Dados simulados para o suporte de contato
    const supportContact = {
      email: "test@test.com",
    };

    // Renderiza o componente MailInfos com os dados simulados
    const { getByText } = render(<MailInfos supportContact={supportContact} />);

    // Verifica se o texto está presente nos componentes renderizados
    expect(getByText("YOUR FEEFO SUPPORT CONTACT")).toBeInTheDocument();
    expect(getByText("Support")).toBeInTheDocument();
    expect(getByText("020 3362 4208")).toBeInTheDocument();
    expect(getByText("test@test.com")).toBeInTheDocument();
  });
});
