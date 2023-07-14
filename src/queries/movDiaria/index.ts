import data1Mes from '../../utils/pega1Mes'
import dataAtual from '../../utils/pegaDataAtual'

const dataAt = dataAtual()

const dataMesAtras = data1Mes()

export const selectMovimentacao = (cod: string, database: string) => {
  return `
    USE [${database}]
    SELECT
            SUM(MODI_DEBITO) AS DEBITO,
            gaco_nome,
            SUM(MODI_CREDITO) AS CREDITO,
            SUM(MODI_SALDO_ANTES) AS SALDO,
            MODI_DATA AS DATA
          FROM
            USUARIO
          INNER JOIN
            REL_USUARIO_SUBCONTA
          ON
            REUS_USUA_COD = USUA_COD
          INNER JOIN
            SUB_CONTA_CORRENTE
          ON
            SUCC_COD = REUS_SUCC_COD
          INNER JOIN
            MOVIMENTO_DIARIO
          ON
            MODI_SUCC_COD = SUCC_COD
          INNER JOIN
            ALOCACAO_CONTA
          ON
            ALCO_SUCC_COD = SUCC_COD
          INNER JOIN
            GRUPO_ALOC_CONTA
          ON
            ALCO_GACO_COD = GACO_COD
          INNER JOIN
            APLICACAO_CONTA
          ON
            APCO_COD = ALCO_APCO_COD
          WHERE
            USUA_COD = ${cod} 
          AND
            MODI_DATA
          BETWEEN
            '${dataMesAtras}' 
          AND
            '${dataAt}'
          GROUP BY 
            MODI_DATA,
            GACO_NOME 
          ORDER BY 
            MODI_DATA 
          DESC
  `
}

export const selectMovimentacaoAplicacao = (cod: string, aplicacao: string, database: string) => {
  return `
    USE [${database}]
    SELECT
            SUM(MODI_DEBITO) AS DEBITO,
            gaco_nome,
            SUM(MODI_CREDITO) AS CREDITO,
            SUM(MODI_SALDO_ANTES) AS SALDO,
            MODI_DATA AS DATA
          FROM
            USUARIO
          INNER JOIN
            REL_USUARIO_SUBCONTA
          ON
            REUS_USUA_COD = USUA_COD
          INNER JOIN
            SUB_CONTA_CORRENTE
          ON
            SUCC_COD = REUS_SUCC_COD
          INNER JOIN
            MOVIMENTO_DIARIO
          ON
            MODI_SUCC_COD = SUCC_COD
          INNER JOIN
            ALOCACAO_CONTA
          ON
            ALCO_SUCC_COD = SUCC_COD
          INNER JOIN
            GRUPO_ALOC_CONTA
          ON
            ALCO_GACO_COD = GACO_COD
          INNER JOIN
            APLICACAO_CONTA
          ON
            APCO_COD = ALCO_APCO_COD
          WHERE
            USUA_COD = ${cod} 
          AND
            GACO_NOME LIKE '%${aplicacao}%'
          AND
            MODI_DATA
          BETWEEN
            '${dataMesAtras}' 
          AND
            '${dataAt}'
          GROUP BY
            MODI_DATA,
            GACO_NOME
          ORDER BY
            MODI_DATA
          DESC
  `
}

export const selectComboAplicacao = (cod: string, database: string) => {
  return `
    USE [${database}]  
    SELECT
            DISTINCT(gaco_nome)
          FROM
            USUARIO
          INNER JOIN
            REL_USUARIO_SUBCONTA
          ON
            REUS_USUA_COD = USUA_COD
          INNER JOIN
            SUB_CONTA_CORRENTE
          ON
            SUCC_COD = REUS_SUCC_COD
          INNER JOIN
            MOVIMENTO_DIARIO
          ON
            MODI_SUCC_COD = SUCC_COD
          INNER JOIN
            ALOCACAO_CONTA
          ON
            ALCO_SUCC_COD = SUCC_COD
          INNER JOIN
            GRUPO_ALOC_CONTA
          ON
            ALCO_GACO_COD = GACO_COD
          INNER JOIN
            APLICACAO_CONTA
          ON
            APCO_COD = ALCO_APCO_COD
          INNER JOIN
            CONTA_CORRENTE
          ON
            SUCC_COCO_COD = COCO_COD
          WHERE
            USUA_CPD = ${cod}
  `
}

export const selectMovimentFilterData = (cod: string, dataIni: string, dataFim: string, database: string) => {
  return `
    USE [${database}]
    SELECT
            APCO_NOME,
            MODI_DEBITO,
            MODI_CREDITO,
            MODI_SALDO_ANTES,
            MODI_DATA,
            SUCC_DESC
          FROM
            USUARIO
          INNER JOIN
            REL_USUARIO_SUBCONTA
          ON
            REUS_USUA_COD = USUA_COD
          INNER JOIN
            SUB_CONTA_CORRENTE
          ON
            SUCC_COD = REUS_SUCC_COD
          INNER JOIN
            MOVIMENTO_DIARIO
          ON
            MODI_SUCC_COD = SUCC_COD
          INNER JOIN
            ALOCACAO_CONTA
          ON
            ALCO_SUCC_COD = SUCC_COD
          INNER JOIN
            GRUPO_ALOC_CONTA
          ON
            ALCO_GACO_COD = GACO_COD
          INNER JOIN
            APLICACAO_CONTA
          ON
            APCO_COD = ALCO_APCO_COD
          WHERE
            USUA_COD = ${cod} 
          AND
            MODI_DATA
          BETWEEN
            '${dataIni}' 
          AND
            '${dataFim}'
          `
}

export const selectMovimentFilterDataAndApl = (cod: string, dataIni: string, dataFim: string, aplicacao: string, database: string) => {
  return `
    USE [${database}]
    SELECT
            APCO_NOME,
            MODI_DEBITO,
            MODI_CREDITO,
            MODI_SALDO_ANTES,
            MODI_DATA,
            SUCC_DESC
          FROM
            USUARIO
          INNER JOIN
            REL_USUARIO_SUBCONTA
          ON
            REUS_USUA_COD = USUA_COD
          INNER JOIN
            SUB_CONTA_CORRENTE
          ON
            SUCC_COD = REUS_SUCC_COD
          INNER JOIN
            MOVIMENTO_DIARIO
          ON
            MODI_SUCC_COD = SUCC_COD
          INNER JOIN
            ALOCACAO_CONTA
          ON
            ALCO_SUCC_COD = SUCC_COD
          INNER JOIN
            GRUPO_ALOC_CONTA
          ON
            ALCO_GACO_COD = GACO_COD
          INNER JOIN
            APLICACAO_CONTA
          ON
            APCO_COD = ALCO_APCO_COD
          WHERE
            USUA_COD = ${cod}
          AND
            MODI_DATA
          BETWEEN
            '${dataIni}' 
          AND
            '${dataFim}'
          AND 
            GACO_NOME LIKE'%${aplicacao}%'
          `
}

export const selectMovimentDetailsDataAndApl = (cod: string, data: string, aplicacao: string, database: string) => {
  return `
    USE [${database}]
    SELECT 
            APCO_NOME,
            MODI_DEBITO,
            MODI_CREDITO,
            MODI_SALDO_ANTES,
            MODI_DATA,
            SUCC_DESC
          FROM
            USUARIO
          INNER JOIN
            REL_USUARIO_SUBCONTA
          ON
            REUS_USUA_COD = USUA_COD
          INNER JOIN
            SUB_CONTA_CORRENTE
          ON
            SUCC_COD = REUS_SUCC_COD
          INNER JOIN
            MOVIMENTO_DIARIO
          ON
            MODI_SUCC_COD = SUCC_COD
          INNER JOIN
            ALOCACAO_CONTA
          ON
            ALCO_SUCC_COD = SUCC_COD
          INNER JOIN
            GRUPO_ALOC_CONTA
          ON
            ALCO_GACO_COD = GACO_COD
          INNER JOIN
            APLICACAO_CONTA
          ON
            APCO_COD = ALCO_APCO_COD
          WHERE
            USUA_COD = ${cod} 
          AND
            MODI_DATA = '${data}'
          AND 
            gaco_nome LIKE'%${aplicacao}%'
          `
}

export const selectMovimentDetailsData = (cod: string, data: string, database: string) => {
  return `
    USE [${database}]
    SELECT 
      APCO_NOME,
      MODI_DEBITO,
      MODI_CREDITO,
      MODI_SALDO_ANTES,
      MODI_DATA,
      SUCC_DESC
    FROM
      USUARIO
    INNER JOIN
      REL_USUARIO_SUBCONTA
    ON
      REUS_USUA_COD = USUA_COD
    INNER JOIN
      SUB_CONTA_CORRENTE
    ON
      SUCC_COD = REUS_SUCC_COD
    INNER JOIN
      MOVIMENTO_DIARIO
    ON
      MODI_SUCC_COD = SUCC_COD
    INNER JOIN
      ALOCACAO_CONTA
    ON
      ALCO_SUCC_COD = SUCC_COD
    INNER JOIN
      GRUPO_ALOC_CONTA
    ON
      ALCO_GACO_COD = GACO_COD
    INNER JOIN
      APLICACAO_CONTA
    ON
      APCO_COD = ALCO_APCO_COD
    WHERE
      USUA_COD = ${cod} 
    AND
      MODI_DATA = '${data}'
`
}
