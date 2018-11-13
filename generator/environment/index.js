module.exports = {
  name: 'NodeExpressEnvironment',
  async write () {
    await this.renderComponent({ src: 'env-dev.txt', dest: '.env' })
    await this.renderComponent({ src: 'env-docker.txt', dest: '.env.docker' })
  }
}
