import React, { useState } from 'react';
import './CommentModal.css';

const CommentModal = ({ isOpen, onClose, wordData }) => {
    const [comment, setComment] = useState('');

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="comment-modal">
                <div className="modal-header">
                    <h3>Ajouter un commentaire</h3>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>

                <div className="modal-content">
                    <div className="word-details">
                        <h4>{wordData.word}</h4>
                        <p>{wordData.definition}</p>
                    </div>

                    <div className="comment-form">
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Ajoutez votre commentaire ou demande de clarification..."
                            rows={4}
                        />
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="cancel-button" onClick={onClose}>Annuler</button>
                    <button className="submit-button" onClick={() => {
                        // Logique pour sauvegarder le commentaire
                        onClose();
                    }}>
                        Envoyer le commentaire
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentModal; 