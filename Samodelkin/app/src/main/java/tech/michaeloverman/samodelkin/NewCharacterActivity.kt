package tech.michaeloverman.samodelkin

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.annotation.MainThread
import kotlinx.android.synthetic.main.activity_new_character.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

private const val CHARACTER_DATA_KEY = "CHARACTER_DATA_KEY"

private var Bundle.characterData
    get() = getSerializable(CHARACTER_DATA_KEY) as CharacterGenerator.CharacterData
    set(value) = putSerializable(CHARACTER_DATA_KEY, value)

class NewCharacterActivity : AppCompatActivity() {
    private var characterData = CharacterGenerator.generate()

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
//        outState.putSerializable(CHARACTER_DATA_KEY, characterData)
        outState.characterData = characterData
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_new_character)

//        characterData = savedInstanceState?.let {
//            it.getSerializable(CHARACTER_DATA_KEY) as CharacterGenerator.CharacterData
//        } ?: CharacterGenerator.generate()
        characterData = savedInstanceState?.characterData ?: runBlocking { fetchCharacterData().await() }

        generateButton.setOnClickListener {
//            characterData = CharacterGenerator.generate()
            runBlocking {
                characterData = fetchCharacterData().await()
                while (characterData.str.toInt() < 10) {
                    characterData = fetchCharacterData().await()
                }
                displayCharacterData()
            }
        }

        displayCharacterData()
    }

    private fun displayCharacterData() {
        characterData.run {
            nameTextView.text = name
            raceTextView.text = race
            dexterityTextView.text = dex
            wisdomTextView.text = wis
            strengthTextView.text = str
        }
    }
}
