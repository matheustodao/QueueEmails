const Queue = require('bull');
const redisConfig = require('../../configs/redis');
const jobs = require('../jobs/index');

const queues = Object.values(jobs).map((job) => ({
  bull: new Queue(job.key, { redis: redisConfig }),
  name: job.key,
  handle: job.handle,
}));

module.exports = {
  queues,
  add(name, data) {
    const queue = this.queues.find((queue) => queue.name.toLowerCase() === name.toLowerCase());

    // Add mail queue <-> Adiciona o e-mail na fila de espera
    return queue.bull.add(data);
  },

  process() {
    return this.queues.forEach((queue) => {
      // Process queue <--> Processa fila de espera
      queue.bull.process(queue.handle);

      queue.bull.on('failed', (job, error) => {
        console.log({ JOB: `Failed: ${queue.name} - ${job.data}` });
        console.log(error);
      })
    })
  }
};
