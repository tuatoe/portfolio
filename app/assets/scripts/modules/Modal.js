/*import $ from 'jquery';

 class Modal{
    constructor(){
      this.openModalButton = $('.open-modal');
      this.modal = $('.modal');
      this.closeModalButton = $('.modal__close');
      this.events();
    }

    events(){
      //clicking the open modal button
      this.openModalButton.on('click',$(this).openModal.bind($(this));

      //clicking the x close modal button
      this.closeModalButton.on('click',$(this).closeModal.bind($(this)));

      //pushes any key
      $(document).keyup($(this).keyPressHandler.bind($(this)));
    }

    keyPressHandler(e){
      if(e.keyCode == 27){
        $(this).closeModal();
      }
    }

   openModal(){
        var matchingModal = $(this).attr('data-matching-modal');
        $('#'+matchingModal).addClass('modal--is-visible');
    }

    closeModal(){
        $(this).modal.removeClass('modal--is-visible');
    }


 }
export default Modal;
*/

import $ from 'jquery';

 class Modal{
    constructor(){
      this.openModalButton = $('.open-modal');
      this.modal = $('.modal');
      this.closeModalButton = $('.modal__close');
      this.events();
    }

    events(){
      //clicking the open modal button
      this.openModalButton.click(this.openModal);

      //clicking the x close modal button
      this.closeModalButton.click(this.closeModal.bind(this));

      //pushes any key
      $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
      if(e.keyCode == 27){
        this.closeModal();
      }
    }

    openModal(){
        var currentModal = $(this);
        var matchingModal = currentModal.attr('data-matching-modal');
        //this.modal.addClass('modal--is-visible');
        $('#' + matchingModal).addClass('modal--is-visible');
        return false;
    }

    closeModal(){
        this.modal.removeClass('modal--is-visible');
    }


 }
export default Modal;
