
# 📋 Sistema de Cadastro de Clientes em React

![Preview da Aplicação](preview.png) <img width="722" height="835" alt="image" src="https://github.com/user-attachments/assets/2e619714-eb77-451b-b422-594baa9159ef" />
<img width="750" height="648" alt="image" src="https://github.com/user-attachments/assets/a35483e3-cb09-4ac8-8d47-efb24cd1a823" />
<img width="1177" height="767" alt="image" src="https://github.com/user-attachments/assets/66bc9ea3-a2df-4703-94c8-ebb1be6b95f0" />


Um sistema simples para gerenciamento de clientes com persistência local, desenvolvido com React e Vite.

## ✨ Funcionalidades

- ✅ Cadastro de clientes (nome, telefone e observações)
- ✅ Validação de campos obrigatórios
- ✅ Persistência dos dados no localStorage
- ✅ Navegação por abas
- ✅ Responsivo e com feedback visual

## 🛠️ Tecnologias Utilizadas

- React 18
- Vite
- JavaScript ES6+
- CSS Modules
- LocalStorage API

## 🚀 Como Executar o Projeto

1. **Pré-requisitos**:
   - Node.js (v18+)
   - npm (v9+)

2. **Instalação**:
   ```bash
   git clone https://github.com/seu-usuario/client-registration.git
   cd client-registration
   npm install

3. **Execução**:
bash
npm run dev

**A aplicação estará disponível em: http://localhost:5173**

**Estrutura**
src/
├── App.jsx           # Componente principal
├── main.jsx          # Ponto de entrada
├── components/
│   ├── ClientForm.jsx # Formulário de cadastro
│   └── ClientList.jsx # Listagem de clientes
└── styles/
    ├── global.css    # Estilos globais
    └── form.css      # Estilos do formulário

**Componentes Principais**
ClientForm.jsx
Gerencia o estado do formulário

Valida campos obrigatórios

Formata o telefone automaticamente

Exibe mensagens de erro

**ClientList.jsx**
Mostra todos os clientes cadastrados

Destaca novos registros

Oferece opção para limpar a lista

**Persistência de Dados**
Os dados são automaticamente:

Salvos no localStorage quando atualizados

Recuperados quando a aplicação é reiniciada

**Estilização**
CSS modularizado por componente

Animações simples para melhor UX

Layout responsivo
