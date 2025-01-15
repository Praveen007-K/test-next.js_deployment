module.exports = {
  apps : [{
    script: 'npm start'
  }],

  deploy : {
    production : {
      key : 'key.pem',
      user : 'ubuntu',
      host : '13.201.166.147',
      ref  : 'origin/master',
      repo : 'git@github.com:Praveen007-K/test-next.js_deployment.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options' : 'ForwardAgent=yes'
    }
  }
};
