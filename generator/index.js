module.exports = {
  name: 'NodeJsExpressMongoDB',
  async write () {
    await this.composeWith('./base')
    await this.composeWith('./environment')
    await this.composeWith('./routes')
    await this.composeWith('./resource_module')
    await this.composeWith('./docker_compose')
    await this.composeWith('./resource_spec')
  }
}
