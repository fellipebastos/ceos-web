FROM node:12.14.1

ARG app_env
ENV APP_ENV $app_env

WORKDIR /usr/src/app

COPY ./package.json package.json

RUN yarn

USER node

COPY --chown=node:node ./ /usr/src/app

EXPOSE 3000

CMD if [ ${APP_ENV} = production ]; \
	then \
	yarn global add serve && \
	yarn build && \
	cd build && \
	npx serve -l 3000; \
	else \
	yarn start; \
	fi
