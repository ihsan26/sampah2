'use strict'

const Answer = use('App/Models/Answer')

class AnswerController {
  async store({ request, response }) {
    try {
      const answerData = request.all()
      const answer = await Answer.create(answerData)
      return response.status(201).send(answer)
    } catch (e) {
      return response.status(400).send({
        message: 'Something went wrong!'
      })
    }
  }
}

module.exports = AnswerController
