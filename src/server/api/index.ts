import * as express from 'express';
import * as cors from 'cors';
import {fourOFour} from '../core/404/404-middleware';
import * as httpStatus from 'http-status';
import * as methodOverride from 'method-override';
import {errorConverter} from '../core/errors/error-converter-middleware';
import * as bodyParser from 'body-parser';
import InventoryRouter from './inventory/inventory.router';

const api: express.Application = express();

api.disable('x-powered-by');

// enable method-override for old clients
api.use(methodOverride());
// enable CORS - Cross Origin Resource Sharing
api.use(cors());
api.use(bodyParser.json());
api.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

api.use('/data', InventoryRouter);

//try to convert all error to common interface
api.use(errorConverter);

api.use((err, req, res, next) => {
  //eslint-disable-line no-unused-vars
  //log the error and the request as it is.
  const error = {
    message: err.isPublic
      ? err.message
      : httpStatus[err.status] || httpStatus[httpStatus.INTERNAL_SERVER_ERROR],
    stack: err.isPublic ? err.stack : undefined,
    code: err.code,
    response: err.response,
  };
  if (api.get('env') === 'production') {
    Reflect.deleteProperty(error, 'stack');
  }
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).json(error);
  console.error(err);
});

api.use(fourOFour);

api.use((req, res) => {
  if (res.statusCode === httpStatus.NOT_FOUND) {
    res.json({
      message: httpStatus[httpStatus.NOT_FOUND],
    });
  }
});

export default api;
