import user from './user.json';
export const swaggerJson = {
  explorer: true,
  swaggerOptions: {
    openapi: '3.0.0',
    info: {
      title: ' Api SGN mobile ',
      description: 'Essa api foi feita pensada no sgn para o mobile',
      contact: {
        email: 'desenvolvimento@sgnsistemas.com.br'
      },
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:9005/v1',
        description: 'Base url de dev'
      }
    ],
    paths: {
      user,
      '/dailyMoviment': {
        get: {
          sumary: 'Get daily moviment',
          description: 'This route is responsible for daily moviment',
          security: [
            {
              bearerAuth: []
            }
          ],
          tags: [
            'Daily moviment'
          ],
          responses: {
            400: {
              description: ' Known bug '
            },
            200: {
              description: 'Logged',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    $ref: '#/components/schemas/dailyMovimentResponse'
                  }
                }
              }
            }
          }
        }
      },
      '/dailyMoviment/cmbAplicacao': {
        get: {
          sumary: 'Get combo aplication daily moviment',
          description: 'This route is responsible for aplication daily moviment',
          security: [
            {
              bearerAuth: []
            }
          ],
          tags: [
            'Daily moviment'
          ],
          responses: {
            400: {
              description: ' Known bug '
            },
            200: {
              description: 'Logged',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    $ref: '#/components/schemas/comboResponse'
                  }
                }
              }
            }
          }
        }
      },
      '/dailyMoviment/filter/aplicacao/{aplicacao}': {
        get: {
          sumary: 'Get daily moviment from the name',
          description: 'This route is responsible for aplication daily moviment from the name',
          security: [
            {
              bearerAuth: []
            }
          ],
          tags: [
            'Daily moviment'
          ],
          parameters: [
            {
              name: 'aplicacao',
              in: 'path',
              description: 'Name of aplication '
            }
          ],
          responses: {
            400: {
              description: ' Known bug '
            },
            200: {
              description: 'Logged',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    $ref: '#/components/schemas/dailyMovimentResponse'
                  }
                }
              }
            }
          }
        }
      },
      '/dailyMoviment/filter/aplicacaoData': {
        get: {
          sumary: 'Get daily moviment from the name or data',
          description: 'This route is responsible for aplication daily moviment from the name or date period',
          security: [
            {
              bearerAuth: []
            }
          ],
          tags: [
            'Daily moviment'
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/AplicationDataRequest'
                },
                examples: {
                  user: {
                    value: {
                      aplicacao: 'Mo',
                      dataIni: '2000-12-27',
                      dataFim: '2022-12-22'
                    }
                  }
                }
              }
            }
          },
          responses: {
            400: {
              description: ' Known bug '
            },
            200: {
              description: 'Logged',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    $ref: '#/components/schemas/dailyMovimentFilterDetailsResponse'
                  }
                }
              }
            }
          }
        }
      },
      '/dailyMoviment/details/aplicacaoData': {
        get: {
          sumary: 'Get daily moviment from the name or data',
          description: 'This route is responsible for aplication daily moviment from the name or date',
          security: [
            {
              bearerAuth: []
            }
          ],
          tags: [
            'Daily moviment'
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/AplicationDetailsDataRequest'
                },
                examples: {
                  user: {
                    value: {
                      aplicacao: 'Mo',
                      data: '2000-12-27'
                    }
                  }
                }
              }
            }
          },
          responses: {
            400: {
              description: ' Known bug '
            },
            200: {
              description: 'Logged',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    $ref: '#/components/schemas/dailyMovimentFilterDetailsResponse'
                  }
                }
              }
            }
          }
        }
      }
    },
    components: {
      schemas: {
        UserRequest: {
          type: 'object',
          properties: {
            USUA_SIGLA: {
              type: 'string'
            },
            USUA_SENHA_APP: {
              type: 'string'
            }
          }
        },
        AplicationDataRequest: {
          type: 'object',
          properties: {
            aplicacao: {
              type: 'string'
            },
            dataIni: {
              type: 'string'
            },
            dataFim: {
              type: 'string'
            }
          }
        },
        AplicationDetailsDataRequest: {
          type: 'object',
          properties: {
            aplicacao: {
              type: 'string'
            },
            data: {
              type: 'string'
            }
          }
        },
        LoginResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string'
            },
            error: {
              type: 'string'
            },
            status: {
              type: 'number'
            },
            refreshToken: {
              type: 'string'
            }
          }
        },
        TradePasswordResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string'
            }
          }
        },
        AcessTokenResponse: {
          type: 'object',
          properties: {
            acessToken: {
              type: 'string'
            }
          }
        },
        comboResponse: {
          type: 'object',
          properties: {
            gaco_nome: {
              type: 'string'
            }
          }
        },
        dailyMovimentResponse: {
          type: 'object',
          properties: {
            DEBITO: {
              type: 'number'
            },
            gaco_nome: {
              type: 'string'
            },
            CREDITO: {
              type: 'number'
            },
            SALDO: {
              type: 'number'
            },
            DATA: {
              type: 'string'
            }
          }
        },
        dailyMovimentFilterDetailsResponse: {
          type: 'object',
          properties: {
            APCO_NOME: {
              type: 'string'
            },
            MODI_DEBITO: {
              type: 'number'
            },
            MODI_CREDITO: {
              type: 'number'
            },
            MODI_SALDO_ANTES: {
              type: 'number'
            },
            MODI_DATA: {
              type: 'string'
            },
            SUCC_DESC: {
              type: 'string'
            }
          }
        }
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  }
};
