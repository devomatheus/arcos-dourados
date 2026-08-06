# Portal do Colaborador — Arcos Dourados

> Protótipo de portal interno para colaboradores da **Arcos Dourados** (operadora do McDonald's no Brasil), reunindo os módulos de **Saúde**, **RH** e **Notificações** em um único ambiente web, responsivo e de fácil navegação.

![Status](https://img.shields.io/badge/status-MVP%20%2F%20Demonstra%C3%A7%C3%A3o-FF8200)
![Módulo Saúde](https://img.shields.io/badge/Sa%C3%BAde-Fase%201-6f7072)
![Módulo RH](https://img.shields.io/badge/RH-Fase%202-6f7072)

---

## 📋 Sobre o projeto

Este repositório contém o **front-end estático** (HTML, CSS e JavaScript) de um portal do colaborador, construído para validar, em formato de demonstração, a experiência de autoatendimento que o RH da Arcos Dourados pretende oferecer aos funcionários.

Trata-se de um **MVP (produto minimamente viável)**: todas as informações exibidas são dados de exemplo, armazenados apenas na sessão do navegador (`sessionStorage`), sem integração com sistemas corporativos reais. O objetivo é apresentar o conceito, validar a usabilidade e servir de base para uma futura integração com os sistemas de RH, folha de pagamento e ponto da empresa.

---

## ✨ Funcionalidades

### 🏠 Dashboard inicial

- Visão geral de boas-vindas ao colaborador.
- Atalhos rápidos para os módulos disponíveis (Saúde, Holerites, Banco de Horas).
- Painel com as notificações mais recentes.
- Indicação da fase de entrega de cada módulo (MVP, Fase 2, etc.).

### ❤️ Módulo Saúde

- Catálogo de **programas de saúde** oferecidos pela empresa (categoria, resumo e material informativo).
- Visualização de material detalhado de cada programa em janela modal.
- Botão de **"Notificar-me"** para o colaborador se inscrever e receber novidades sobre um programa específico.

### 💰 Módulo RH — Holerites

- Listagem de **holerites por competência** (mês/ano).
- Exibição de salário bruto, descontos totais, salário líquido e status de pagamento.
- Detalhamento individual do holerite em modal: **INSS**, **IRRF** e outros descontos, com valores formatados em Real (R$).

### ⏱️ Módulo RH — Banco de Horas

- Card com o **saldo atual** de horas (positivo ou negativo, com destaque visual).
- Formulário para **novo lançamento** de horas (crédito ou débito), com data, quantidade e descrição.
- Histórico completo de lançamentos, ordenado por data mais recente.

### 🔔 Central de Notificações

- Lista unificada de avisos (Saúde, RH e informações gerais do sistema).
- Contagem de notificações não lidas, exibida em destaque na barra superior (navbar), visível em todas as páginas.
- Ações de marcar como lida (individual ou em lote) e excluir notificações.
- Tempo relativo de cada notificação (ex.: "há 2h", "há 3 dias").

### ⚙️ Recursos gerais da plataforma

- Layout responsivo, compatível com desktop e dispositivos móveis.
- Menu de navegação lateral fixo, organizado por área (Saúde, RH, Sistema).
- Botão de **"Reiniciar dados de demonstração"**, que restaura o conteúdo de exemplo original — útil para reapresentar a demo do zero.
- Identidade visual aplicada com a marca e as cores da Arcos Dourados.

---

## 🎯 Problemas que o sistema resolve

| Problema atual | Como o portal resolve |
| --- | --- |
| Colaborador não tem visibilidade centralizada dos seus dados de RH | Reúne holerite, banco de horas e comunicados em um único lugar |
| Dúvidas frequentes sobre holerite geram chamados ao RH | Autoatendimento com detalhamento de descontos disponível a qualquer momento |
| Falta de controle claro sobre banco de horas | Saldo sempre visível e lançamentos registrados pelo próprio colaborador |
| Comunicados de saúde e RH dispersos (e-mail, mural, etc.) | Canal único de notificações, com histórico e opção de inscrição por tema |
| Baixa adesão a programas de saúde por falta de divulgação | Catálogo de programas com opção de "avisar quando houver novidade" |
| Processos de RH pouco digitalizados para o colaborador de loja/restaurante | Interface simples, leve e pensada para uso rápido, inclusive em celular |

---

## 📈 Ganhos esperados

- **Redução de chamados ao RH**, com autoatendimento para consultas recorrentes (holerite, banco de horas).
- **Maior transparência** para o colaborador sobre remuneração, horas e comunicados.
- **Aumento do engajamento** com programas de saúde, por meio de notificações direcionadas.
- **Padronização da comunicação interna**, evitando informações perdidas em múltiplos canais.
- **Escalabilidade**: a estrutura modular (Saúde, RH, Sistema) permite adicionar novos módulos (ex.: Benefícios, Treinamentos, Escala) sem redesenhar o portal.
- **Validação rápida com usuários reais** antes de investir em integração com os sistemas corporativos, reduzindo risco de retrabalho.

---

## 🧱 Arquitetura e tecnologias

Projeto front-end estático, sem back-end nesta fase:

- **HTML5 + Bootstrap 5** — estrutura e componentes de interface.
- **JavaScript (vanilla)** — regras de negócio e renderização dinâmica das telas.
- **Boxicons** — ícones utilizados no menu e nos cards.
- **`sessionStorage`** — persistência temporária dos dados de demonstração (limpos ao fechar o navegador ou clicar em "Reiniciar dados de demonstração").
- **Sneat Bootstrap Template** — base visual utilizada como ponto de partida do layout administrativo.

### Estrutura de pastas

```text
├── index.html                  # Dashboard inicial
├── html/
│   ├── saude-programas.html    # Módulo Saúde
│   ├── rh-holerites.html       # Módulo RH · Holerites
│   ├── rh-banco-horas.html     # Módulo RH · Banco de Horas
│   └── notificacoes.html       # Central de Notificações
├── assets/
│   ├── css/                    # Estilos customizados
│   ├── js/
│   │   ├── app-data.js         # Dados de demonstração e regras de persistência
│   │   └── app-navbar.js       # Lógica da barra de notificações
│   ├── img/                    # Imagens, ícones e ilustrações
│   └── vendor/                 # Bibliotecas de terceiros (Bootstrap, jQuery, etc.)
├── scss/                       # Fontes SCSS do tema
└── tasks/                      # Scripts de build (build.js, prod.js)
```

---

## 🚀 Como executar localmente

Como é um projeto estático, basta abrir o arquivo `index.html` em um navegador, ou servir a pasta com um servidor local simples:

```bash
# Usando o pacote "serve" (Node.js)
npx serve .

# ou usando o servidor embutido do Python
python -m http.server 8080
```

Em seguida, acesse `http://localhost:8080` (ou a porta indicada) no navegador.

> ⚠️ Todos os dados exibidos são fictícios e ficam armazenados apenas na sessão do navegador. Ao fechar a aba/navegador, ou ao clicar em "Reiniciar dados de demonstração", os dados de exemplo são restaurados.

---

## 🔮 Próximos passos sugeridos

- Integração com o sistema de folha de pagamento real para exibição de holerites oficiais.
- Integração com o sistema de ponto/jornada para o banco de horas.
- Autenticação de colaboradores (SSO corporativo).
- Envio de notificações reais (push/e-mail) em vez de dados simulados.
- Novos módulos: Benefícios, Treinamentos e Documentos do colaborador.

---

Arcos Dourados · Portal do Colaborador — Protótipo interno de demonstração
