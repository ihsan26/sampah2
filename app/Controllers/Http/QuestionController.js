'use strict'

const Question = use('App/Models/Question')

class QuestionController {

  async index({ response }) {
    try {
      const questions = await Question.all()
      return response.status(200).send({
        data: questions
      })
    } catch (e) {
      return response.status(400).send({
        message: 'bad request'
      })
    }
  }

  async show({ request, response }) {
    try {
      const {number} = request.get('number')
      let question;
      if (number) {
        question = await Question.findBy('number', number)
      } else {
        question = await Question.findBy('number', 1)
      }
      return response.status(200).send(question)
    } catch (e) {
      return response.status(400).send({
        'message':'Something went wrong!'}
        )
    }
  }

}

module.exports = QuestionController
