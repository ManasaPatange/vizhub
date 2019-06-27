import jwt from 'jsonwebtoken';
import { ErrorResponse } from '../../ErrorResponse';
import { VizHubAPIError } from '../../VizHubAPIError';
import { getAccessToken } from '../getAccessToken';
import { getGitHubUser } from '../getGitHubUser';
import { jwtVerify } from '../jwt';

export const authMe = (req, res) => {
  try {
    const { vizHubJWT } = req.cookies;
    res.send(jwtVerify(vizHubJWT));
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      error = new VizHubAPIError({
        error: 'jwt_error',
        errorDescription: error.message
      });
    }

    res.send(ErrorResponse(error));
  }
};
