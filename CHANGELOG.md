# Changelog

## 1.5.0

### Изменения
- подписки на одинаковые события уходят на сокет 1 раз, если подписки до этого не существовало 

## 1.3.0

### Изменения
- ошибки от стриминга не вызывают падения приложения

### Добавлено
- добавлена возможность обрабатывать ошибки от стриминг апи

## [Unreleased]

### Изменения
- Изменился тип возвращаемых ошибок, с [ErrorPayload](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/master/src/domain.ts#L313) на [ErrorData](https://github.com/TinkoffCreditSystems/invest-openapi-js-sdk/blob/master/src/domain.ts#L12)
