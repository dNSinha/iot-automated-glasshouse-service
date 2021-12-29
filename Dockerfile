FROM 'docker-frameworkimage-rel.prodlb.travp.net/redhat.io/rhel8/nodejs-14:latest'

ENV PATH /opt/rh/rh-nodejs12/root/usr/bin:$PATH

COPY . .

RUN npm cache clear --force && npm install --loglevel verbose --userconfig=/tmp/de/.npmrc &&\
    rm -f package*.*

EXPOSE 3000

CMD ["node", "bin/server.js"]
